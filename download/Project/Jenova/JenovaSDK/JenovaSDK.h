
/*-------------------------------------------------------------+
|                                                              |
|                   _________   ______ _    _____              |
|                  / / ____/ | / / __ \ |  / /   |             |
|             __  / / __/ /  |/ / / / / | / / /| |             |
|            / /_/ / /___/ /|  / /_/ /| |/ / ___ |             |
|            \____/_____/_/ |_/\____/ |___/_/  |_|             |
|                                                              |
|                          Jenova SDK                          |
|                   Developed by Hamid.Memar                   |
|                                                              |
+-------------------------------------------------------------*/

#pragma once

// Enable Jenova SDK
#define JENOVA_SDK

// Jenova API Import/Export
#ifdef JENOVA_SDK_BUILD
	#define JENOVA_API _declspec(dllexport)
#else
	#define JENOVA_API _declspec(dllimport)
#endif

// Jenova Definitions
#ifndef JENOVA_VERSION
	#define JENOVA_VERSION "Unknown Version"
#endif
#ifndef JENOVA_COMPILER

	#define JENOVA_COMPILER "Unknown Compiler"
#endif

// Jenova Utilities
#define JENOVA_EXPORT extern "C" _declspec(dllexport)
#define JENOVA_CALLBACK static_cast<void(*)(void)>([]()

// Jenova Godot SDK
#define JENOVA_GODOT_SDK

// Jenova Configuration Macros
#define JENOVA_TOOL_SCRIPT

// Jenova Script Block Macros
#define JENOVA_SCRIPT_BEGIN
#define JENOVA_SCRIPT_END

// Jenova Virtual Machine Block Macros
#define JENOVA_VM_BEGIN
#define JENOVA_VM_END

// Jenova Property Macros
#ifndef JENOVA_PROPERTY
	#define JENOVA_PROPERTY(pType, pName, pValue, ...) pType pName = pValue;
#endif

// Jenova Class Name
#ifndef JENOVA_CLASS_NAME
	#define JENOVA_CLASS_NAME(className)
#endif

// C++ Runtime Imports
#ifndef JENOVA_SDK_BUILD
	#include <string>
	#include <functional>
#endif

// Pre-defined Types
namespace godot
{
	// Engine Classes
	class Object;
	class Node;
	class String;
	class StringName;
	class Variant;
	class SceneTree;
	class Texture2D;

	// Template Classes
	template <typename T> class Ref;

	// Engine Enumerators
	enum Error;
}
namespace std
{
	// Template Classes
	template <typename T> class function;
}

// Jenova SDK Implementation
namespace jenova::sdk
{
	// Enumerators
	enum class EngineMode
	{
		Editor,
		Debug,
		Runtime
	};
	enum class FileSystemEvent
	{
		Added,
		Removed,
		Modified,
		RenamedOld,
		RenamedNew
	};
	enum class RuntimeReloadMode
	{
		FullReset,
		HotReload,
		ForceReload
	};

	// Function Definitions
	typedef void(*FileSystemCallback)(const godot::String& targetPath, const FileSystemEvent& fsEvent);

	// Type Definitions
	typedef void* FunctionPtr;
	typedef const char* MemoryID;
	typedef const char* VariableID;
	typedef unsigned short TaskID;
	typedef std::function<void()> TaskFunction;

	// Structures
	struct Caller
	{
		// Script Caller
		const godot::Object* self;
	};

	// Helpers Utilities
	JENOVA_API bool IsEditor();
	JENOVA_API bool IsGame();
	JENOVA_API EngineMode GetEngineMode();
	JENOVA_API godot::Node* GetNodeByPath(const godot::String& nodePath);
	JENOVA_API godot::SceneTree* GetTree();
	JENOVA_API double GetTime();
	JENOVA_API void Alert(const char* fmt, ...);
	JENOVA_API godot::String Format(const char* format, ...);
	JENOVA_API void Output(const char* format, ...);
	JENOVA_API const char* GetCStr(const godot::String& godotStr);
	JENOVA_API bool SetClassIcon(const godot::String& className, const godot::Ref<godot::Texture2D> iconImage);
	JENOVA_API godot::Error CreateSignalCallback(godot::Object* object, const godot::String& signalName, FunctionPtr callbackPtr);
	JENOVA_API bool CreateDirectoryMonitor(const godot::String& directoryPath);
	JENOVA_API bool CreateFileMonitor(const godot::String& filePath);
	JENOVA_API bool RegisterFileMonitorCallback(FileSystemCallback callbackPtr);
	JENOVA_API bool UnregisterFileMonitorCallback(FileSystemCallback callbackPtr);
	JENOVA_API bool ReloadJenovaRuntime(RuntimeReloadMode reloadMode);
	JENOVA_API void CreateCheckpoint(const godot::String& checkPointName);
	JENOVA_API double GetCheckpointTime(const godot::String& checkPointName);
	JENOVA_API void DeleteCheckpoint(const godot::String& checkPointName);
	JENOVA_API double GetCheckpointTimeAndDispose(const godot::String& checkPointName);

	// Hot-Reloading Utilities (Sakura)
	namespace sakura
	{
		JENOVA_API bool SupportsReload();
		JENOVA_API void PrepareReload(const godot::String& className);
		JENOVA_API void FinishReload(const godot::String& className);
		JENOVA_API void Dispose(const godot::String& className);
	}

	// Memory Management Utilities (Anzen)
	JENOVA_API void* GetGlobalPointer(MemoryID id);
	JENOVA_API void* SetGlobalPointer(MemoryID id, void* ptr);
	JENOVA_API void DeleteGlobalPointer(MemoryID id);
	JENOVA_API void* AllocateGlobalMemory(MemoryID id, size_t size);
	JENOVA_API void FreeGlobalMemory(MemoryID id);

	// Global Variable Storage Utilities
	JENOVA_API godot::Variant GetGlobalVariable(VariableID id);
	JENOVA_API void SetGlobalVariable(VariableID id, godot::Variant var);
	JENOVA_API void ClearGlobalVariables();

	// Task System Utilities
	JENOVA_API TaskID InitiateTask(TaskFunction function);
	JENOVA_API bool IsTaskComplete(TaskID taskID);
	JENOVA_API void ClearTask(TaskID taskID);

	// Template Helpers
	template <typename T> T* GetNode(const godot::String& nodePath)
	{ 
		return static_cast<T*>(GetNodeByPath(nodePath));
	}
	template <typename T> T* GlobalPointer(MemoryID id)
	{ 
		return static_cast<T*>(GetGlobalPointer(id));
	}
	template <typename T> T GlobalGet(MemoryID id)
	{
		return *(static_cast<T*>(GetGlobalPointer(id)));
	}
	template <typename T> void GlobalSet(MemoryID id, const T& newValue)
	{
		T* ptr = static_cast<T*>(GetGlobalPointer(id));
		if (ptr) *ptr = newValue;
	}
	template <typename T> T GlobalVariable(VariableID id)
	{
		return T(GetGlobalVariable(id));
	}
}