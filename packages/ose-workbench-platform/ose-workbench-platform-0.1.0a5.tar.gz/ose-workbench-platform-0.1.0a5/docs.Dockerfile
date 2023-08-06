FROM python:3.8.1-alpine3.11

# Install make with Alpine Linux package manager
RUN apk add make

WORKDIR /var/app

RUN pip install ose-workbench-platform==0.1.0a4

# Keep container running
CMD tail -f /dev/null
