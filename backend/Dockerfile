FROM python:3.11.2-slim-bullseye

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN apt-get update && apt-get install -y postgresql-client libpq-dev
RUN apt-get update && apt-get install -y \
  gcc libc-dev locales zlib1g zlib1g-dev
RUN pip3 install --default-timeout=100 -r /requirements.txt

RUN mkdir /app
WORKDIR /app
COPY ./app /app

RUN useradd user
RUN chown -R user /app
USER user