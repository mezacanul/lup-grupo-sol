import os
import json

# VIDEOS_DIR is now: one level up from current dir (..) then app/assets/videos
VIDEOS_DIR = os.path.join('assets', 'videos')
OUTPUT_DIR = 'output'
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'video_files.json')

PREFIX = 'require("../assets/videos/'
SUFFIX = '"),'

def get_video_files_names(directory):
    try:
        files = []
        for vf in os.listdir(directory):
            if os.path.isfile(os.path.join(directory, vf)):
                files.append(f"{PREFIX}{vf}{SUFFIX}")
        return files
    except FileNotFoundError:
        print(f"Directory not found: {directory}")
        return []

if __name__ == "__main__":
    video_files = get_video_files_names(VIDEOS_DIR)
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    output_txt_file = os.path.join(OUTPUT_DIR, 'video_files.txt')
    with open(output_txt_file, 'w', encoding='utf-8') as f:
        for vf in video_files:
            f.write(vf + "\n")
    print(f"Video file list saved to {output_txt_file}")