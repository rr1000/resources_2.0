#!/usr/bin/env python3
import re

if __name__ == '__main__':
    files = []
    with open('index.txt', 'r') as index:
        files = [line.strip() for line in index.readlines() if len(line.strip()) != 0]
    with open('combined_docs.md', 'w') as output:
        for file_name in files:
            with open(file_name, 'r') as file:
                content = file.read()
                if content.startswith('---\n'):
                    content = re.split('---\n[\S\s]*---\n\n', content)[1]
                output.write(content)
                output.write('\n')
