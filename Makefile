build:
	cd server && $(MAKE) build
	cd client && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down

restart:
	docker-compose down && docker-compose up