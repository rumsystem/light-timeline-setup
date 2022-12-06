export DOLLAR="$"
while :; do sleep 6h & wait $${!}; nginx -s reload; done & envsubst < /etc/nginx/conf.d/mysite.template > /etc/nginx/conf.d/default.conf && nginx -g "daemon off;"