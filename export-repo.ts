#!/usr/bin/env python3
# Description: Script to export relevant files from the repository to a single text file

import os
import pathlib

output_file = "repo-content.txt"
exclude_dirs = ["node_modules", ".git", ".vscode"]
include_extensions = [".js", ".json", ".yaml", ".yml", ".md", ".html"]

# Remove the output file if it already exists
if os.path.exists(output_file):
    os.remove(output_file)

def write_file_content(file_path):
    """Write file content to the output file"""
    # Convert to a relative path
    try:
        relative_path = os.path.relpath(file_path)
    except ValueError:
        # Handle case where paths are on different drives (Windows)
        relative_path = file_path
    
    # Skip if the file is in an excluded directory
    for dir_name in exclude_dirs:
        if dir_name in relative_path.split(os.sep):
            return
    
    # Check if the file extension is in the include list
    extension = os.path.splitext(file_path)[1]
    if extension not in include_extensions:
        return
    
    # Write file header
    with open(output_file, "a", encoding="utf-8") as f:
        f.write("\n\n==========================================\n")
        f.write(f"FILE: {relative_path}\n")
        f.write("==========================================\n\n")
        
        # Write file content
        try:
            with open(file_path, "r", encoding="utf-8") as source_file:
                content = source_file.read()
                f.write(content)
        except UnicodeDecodeError:
            f.write("[Binary file or encoding issues - content skipped]")
        except Exception as e:
            f.write(f"[Error reading file: {str(e)}]")

print("Starting to collect repository content...")

# Get all files in the current directory and subdirectories
file_count = 0
for root, dirs, files in os.walk("."):
    # Modify dirs in-place to skip excluded directories
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for filename in files:
        file_path = os.path.join(root, filename)
        write_file_content(file_path)
        file_count += 1

print(f"Repository content has been exported to {output_file}")
print(f"Total files processed: {file_count}")