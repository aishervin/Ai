import os
import zipfile
import sys

def unzip_all(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.lower().endswith('.zip'):
                zip_path = os.path.join(dirpath, filename)
                try:
                    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                        # استخراج همه‌ی محتویات به ریشه‌ی پروژه
                        zip_ref.extractall(root_dir)
                        print(f"✅ Extracted '{zip_path}' to '{root_dir}'")
                except Exception as e:
                    print(f"❌ Error extracting '{zip_path}': {e}", file=sys.stderr)

if __name__ == "__main__":
    root = os.getcwd()  # در GitHub Actions، همین root ریپازیتوری است
    unzip_all(root)
