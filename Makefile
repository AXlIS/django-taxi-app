default:
	echo "This make for taxi app."

start:
	docker-compose up --build -d

test_back:
	docker-compose exec taxi-server python -m pytest

test_front:
	cd client && yarn run cypress open
