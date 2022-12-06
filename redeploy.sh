if [[ ! -v DOMAIN ]]; then
  echo "DOMAIN is not set, eg: DOMAIN=google.com && ./redeploy.sh"
  exit 1
fi

docker pull postgres
docker pull btclinkgrt/quorum-feed
docker-compose down --remove-orphans && docker-compose up -d