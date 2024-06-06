FROM node:12.22.9-alpine
ADD . .
CMD ["node", "app.js"]
