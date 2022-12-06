docker pull postgres
docker pull btclinkgrt/quorum-timeline
docker-compose -f docker-compose.yml -f docker-compose-https.yml down --remove-orphans && docker-compose -f docker-compose.yml -f docker-compose-https.yml up -d