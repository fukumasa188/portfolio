.PHONY: dev kill

dev:
	npm run dev

kill:
	lsof -ti:3000 | xargs kill 2>/dev/null || true
