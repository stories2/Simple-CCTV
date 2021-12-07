FROM ubuntu:21.04

RUN apt update
RUN apt install ffmpeg htop vim tmux -y
RUN ffmpeg –version

CMD ["ffmpeg", "-i", "/dev/video0", "-level", "3.0", "-s", "640x480", "-start_number", "0", "-hls_time", "10", "-hls_list_size", "10", "-f", "hls", "index.m3u8"]