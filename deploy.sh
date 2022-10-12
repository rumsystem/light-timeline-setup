docker login -u prs-os -p pressone dockerhub.qingcloud.com
docker pull dockerhub.qingcloud.com/pressone/postgres
docker pull dockerhub.qingcloud.com/pressone/light-timeline
docker-compose down --remove-orphans && docker-compose up -d