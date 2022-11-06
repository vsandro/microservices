
CD C:\svieira\IPCA\'Cloud Computing'\Trabalho\Microservices

docker-compose up -d


CD C:\svieira\IPCA\'Cloud Computing'\Trabalho\Microservices\apps\authentications

npm install

npx yarn add -D prisma

npx prisma migrate dev

npm run start:dev


http://localhost:3333/authentications


{
	"name": "Ana Paula",
	"email": "ana@gmail.com",
	"profileId": "b39f69cc-5d3e-11ed-9b6a-0242ac120002"
}



-------------------------

authenticationAPP


----

authenticationAPP

Authentications - authentications

Customer - User

Product - Profile

Purchase - Authorization

---


ProductId - ProfileId


----

INSERT INTO "User" (id, name, email) VALUES ('a5d2573d-1501-48a3-a7b5-3453ccc1fea9', 'User #1', 'user_1@gmail.com');


INSERT INTO "Profile" (id, name) VALUES ('b39f69cc-5d3e-11ed-9b6a-0242ac120002', 'Profile #1' );


INSERT INTO "Authorization" (id, userId, profileId) VALUES ('b243af26-f40d-4cef-994b-d375c7a77beb', 'a5d2573d-1501-48a3-a7b5-3453ccc1fea9', 'b39f69cc-5d3e-11ed-9b6a-0242ac120002');



----


echo "# Authentications" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/vsandro/Authentications.git
git push -u origin master






