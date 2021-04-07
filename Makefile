all:
	docker build --rm=true --force-rm=true -t nsfilho/corsproxy:latest ./

push:
	docker push nsfilho/corsproxy:latest
