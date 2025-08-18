# Jenova GodotSDK Builder Script v1.0
# Developed by Hamid.Memar (2025-present)
# Usage : python ./Jenova.GDKit.Builder.py --godot-cpp-path "C:\godot-cpp" --engine runtime
# Use python3 ./Jenova.GDKit.Builder.py --help For More Information.

# Imports
import os, sys, shutil, subprocess, argparse
from colored import fg, attr

# Set Encoding
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Global Functions
def rgb_print(hex_color, output, inplace = False):
    hex_color = hex_color.lstrip('#')
    rgb = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
    ansi_color = 16 + (36 * (rgb[0] // 51) + 6 * (rgb[1] // 51) + (rgb[2] // 51))
    color_code = fg(ansi_color)
    reset_code = attr('reset')
    if inplace:
        print(f"\r{color_code}{output}{reset_code}", end="")
    else:
        print(f"{color_code}{output}{reset_code}")
def patch_includes(target_sdk_path):
    for root, _, files in os.walk(target_sdk_path):
        for file in files:
            if file.endswith(".hpp"):
                fp = os.path.join(root, file)
                with open(fp, "r", encoding="utf-8") as f: lines = f.readlines()
                with open(fp, "w", encoding="utf-8") as f:
                    f.writelines([line.replace("<godot_cpp", "<Godot") for line in lines])
    old = os.path.join(target_sdk_path, "godot_cpp")
    new = os.path.join(target_sdk_path, "Godot")
    if os.path.exists(old): os.rename(old, new)

# Main
def main():
    p = argparse.ArgumentParser(description="Godot-CPP Builder")
    p.add_argument("--godot-cpp-path", required=True, help="Path to godot-cpp source")
    p.add_argument("--precision", choices=["single","double"], default="single", help="Floating point precision")
    p.add_argument("--engine", choices=["editor","runtime","debug"], default="editor", help="Build variant")
    args = p.parse_args()

    godotcpp_dir = args.godot_cpp_path
    script_dir = os.path.dirname(os.path.abspath(__file__))
    cache_dir = os.path.join(script_dir, ".Cache")
    build_dir = os.path.join(cache_dir, "godotcpp")
    sdk_out = os.path.join(script_dir, "GodotSDK")

    if os.path.exists(cache_dir): shutil.rmtree(cache_dir)
    os.makedirs(build_dir, exist_ok=True)

    # Map Engine Flag
    if args.engine == "editor":
        target = "editor"
    elif args.engine == "runtime":
        target = "template_release"
    elif args.engine == "debug":
        target = "template_debug"
    else:
        target = "editor"

    # Configure CMake
    cmake_cmd = [
        "cmake",
        "-S", godotcpp_dir,
        "-B", build_dir,
        f"-DGODOTCPP_PRECISION={args.precision}",
        "-DGODOTCPP_USE_HOT_RELOAD=ON",
        "-DBUILD_SHARED_LIBS=OFF",
        f"-DGODOTCPP_TARGET={target}"
    ]
    rgb_print("#367fff", f"[ ^ ] Configuring godot-cpp ({target})...")
    subprocess.run(cmake_cmd, check=True)

    # Build Godot Binding Library
    build_cmd = ["cmake", "--build", build_dir, "--config", "MinSizeRel"]
    rgb_print("#367fff", f"[ ^ ] Building godot-cpp ({target})...")
    subprocess.run(build_cmd, check=True)

    # Detect Built Library File
    bin_dir = os.path.join(build_dir, "bin")
    libs = [f for f in os.listdir(bin_dir) if target in f and f.startswith("libgodot-cpp")]
    if not libs: sys.exit(f"No built library found for target {target} in bin/")
    lib_path = os.path.join(bin_dir, libs[0])
    ext = os.path.splitext(lib_path)[1]

    # Prepare and Generate GodotSDK
    if os.path.exists(sdk_out): shutil.rmtree(sdk_out)
    os.makedirs(sdk_out, exist_ok=True)
    shutil.copyfile(os.path.join(godotcpp_dir, "gdextension", "gdextension_interface.h"),
                    os.path.join(sdk_out, "gdextension_interface.h"))
    shutil.copytree(os.path.join(godotcpp_dir, "include"), sdk_out, dirs_exist_ok=True)
    shutil.copytree(os.path.join(build_dir, "gen", "include"), sdk_out, dirs_exist_ok=True)
    shutil.copy2(lib_path, os.path.join(sdk_out, f"libGodot.x64{ext}"))

    patch_includes(sdk_out)
    rgb_print("#38f227", "[ √ ] GodotSDK Package Successfully Generated.")
    shutil.rmtree(cache_dir)

# Entrypoint
if __name__=="__main__": main()
