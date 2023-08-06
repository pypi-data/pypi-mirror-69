FROM lambci/lambda:build-python3.8

# Install build dependencies
RUN yum update -y && \
    yum install -y wget && \
    yum clean all

# Install terraform
ARG TF_VERSION="0.12.25"
ARG TF_BASE="terraform_${TF_VERSION}_linux_amd64.zip"
ARG TF_DOWNLOAD="https://releases.hashicorp.com/terraform/${TF_VERSION}/${TF_BASE}"
RUN wget --quiet ${TF_DOWNLOAD} \
  && unzip ${TF_BASE} \
  && mv terraform /usr/bin \
  && rm ${TF_BASE}

# No virtual environments - python packages will be installed globally.
# This means we can run application code using the site python.
RUN poetry config virtualenvs.create false

# Set command prompt.
ENV PS1='🐳 \[\033[1;36m\](cuta@\h)\033[1;33m\](base) \[\033[0m\]'
