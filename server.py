
import http.server
import socketserver
import argparse
import os
import sys

# Server
def main():
    parser = argparse.ArgumentParser(
        description="Simple HTTP server for serving the current directory"
    )
    parser.add_argument(
        "-p", "--port",
        type=int,
        default=8000,
        help="Port to run the server on (default: 8000)"
    )
    args = parser.parse_args()

    port = args.port
    directory = os.getcwd()

    handler = http.server.SimpleHTTPRequestHandler

    try:
        with socketserver.TCPServer(("", port), handler) as httpd:
            print(f"Serving directory: {directory}")
            print(f"Server running at: http://localhost:{port}")
            print("Press Ctrl+C to stop\n")
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
        
    except OSError as e:
        print(f"Failed to start server: {e}")
        sys.exit(1)

# Entrypoint
if __name__ == "__main__":
    main()
