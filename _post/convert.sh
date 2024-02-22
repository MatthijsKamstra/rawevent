#!/bin/bash

echo 'Using convert.sh to convert .md 2 .docx'

echo 'Step 0. Close LibreOffice'
echo '(it seems impossible to refresh a new document with the same name)'
osascript -e 'tell application "LibreOffice" to quit'
# osascript -e 'tell application "Word" to quit'

echo 'Step 1: Convert markdown to docx 5'
# pandoc -o digital_2023_by_MatthijsKamstra_v05.docx -f markdown -t docx -V lang=nl digital_2023_by_MatthijsKamstra_v05.md
# pandoc -o digital_2023_by_MatthijsKamstra.pdf test.md

FILENAME="poc_postmortum"

pandoc -o $FILENAME.docx -f markdown -t docx -V lang=nl 99_total.md

echo 'Step 2: Open docx in LibreOffice'
# open $FILENAME.docx

open -a "LibreOffice" $FILENAME.docx
