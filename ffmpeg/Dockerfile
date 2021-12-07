FROM raspbian/stretch:041518

WORKDIR /ffmpeg
RUN apt update
RUN apt install ffmpeg htop vim tmux -y
RUN ffmpeg -version

CMD ["ffmpeg", "-i", "/dev/video0", "-level", "3.0", "-s", "640x480", "-start_number", "0", "-hls_time", "10", "-hls_list_size", "10", "-hls_flags", "delete_segments", "-f", "hls", "index.m3u8"]