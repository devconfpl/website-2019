FROM ruby:2.6

ENV LANG C.UTF-8

RUN apt-get update -y && apt-get install -y nodejs

RUN gem install bundler:2.0.1

WORKDIR /app

COPY Gemfile Gemfile.lock config.rb ./
COPY source ./source
COPY data ./data

RUN bundle install
