FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    git \
    python3 \
    python3-pip \
    sudo \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Install code-server (VS Code in browser)
RUN curl -fsSL https://code-server.dev/install.sh | sh

# Create user
RUN useradd -m -s /bin/bash user && \
    echo "user ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

ENV HOME=/home/user

WORKDIR /home/user

RUN chown -R user:user /home/user

USER user

# Start browser VS Code
CMD ["sh", "-c", "code-server --bind-addr 0.0.0.0:${PORT:-8080} --auth none /home/user"]
