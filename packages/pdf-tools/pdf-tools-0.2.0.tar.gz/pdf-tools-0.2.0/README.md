# pdf-tools

PDF tools, e.g. pdf2images, images2pdf, pdf2text, pdf2html, pdfmeta...

## Install

    pip install pdf-tools

## Installed Commands

- pdfmeta
- pdf2text
- pdf2html
- pdf2images
- images2pdf

## Command Helps

    E:\pylabs\pdf-tools>pdfmeta --help
    Usage: pdfmeta [OPTIONS] FILENAME

    Options:
    -p, --password TEXT
    --help               Show this message and exit.

    E:\pylabs\pdf-tools>pdf2text --help
    Usage: pdf2text [OPTIONS] FILENAME

    Options:
    -p, --password TEXT
    --help               Show this message and exit.

    E:\pylabs\pdf-tools>pdf2html --help
    Usage: pdf2html [OPTIONS] FILENAME

    Options:
    -p, --password TEXT
    --help               Show this message and exit.

    E:\pylabs\pdf-tools>pdf2images --help
    Usage: pdf2images [OPTIONS] FILENAME

    Options:
    -p, --password TEXT
    -o, --output TEXT
    -t, --type [png|jpg]
    --help                Show this message and exit.

    E:\pylabs\pdf-tools>images2pdf --help
    Usage: images2pdf [OPTIONS] FOLDER

    Options:
    -o, --output TEXT  PDF filename.  [required]
    --help             Show this message and exit.

## Releases

### v0.2.0 2020/05/22

- Use pillow module to create pdf file from image instead of fitz module. It makes a smaller result pdf file.
- Fix document.

### v0.1.0 2019/08/09

- First release.