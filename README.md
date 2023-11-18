# Git Hub Commit Diff

<b>Coding exercise - Fleet Studio</b>

The project is build up on the following tech stack<br>
<b>Frontend: </b> HTML, CSS, Typescript, Angular, Angular-material, Bootstrap<br>
<b>Backend: </b> Java, Springboot, Maven<br>

To run the app, follow the below instruction<br>

# Backend:
1. Need java 11<br>
2. Import project to Intellij (recommended)<br>
3. Right click on project and choose maven -> reload (download dependency)<br>
4. Check java indexing is done<br>
5. Run the project from the main method, or from menu bar choose run menu and choose run<br>
6. A swagger page has been configured, once backend is up, hit this url in browser to open the swagger page.<br>
	http://localhost:8741/swagger-ui.html<br>
	<img src="screenshot/6.png" width="40%">
	
	
# Frontend:
1. Need node js version 14+
2. Go into the frontend project, and check whether you are into angular project.<br>
	git-commit-reader\Frontend\git-commit-reader-frontend<br>
3. Install the dependency by running this command "npm i"<br>
4. To run the app enter this command in terminal "npm start"<br>
5. To view the app go the this url http://localhost:1234/<br>


Using this app user can feed owner, repo name and commit hash code and get the commit details.<br>
This is done for testing purpose.<br>
On the first page, user have to fill the form by giving owner name, repo name, commit hash of any <br>
public github repository.<br>

On clicking Search button, it will show the commit diff and other details regarding the commit.<br>

# Application Screenshot:<br>

<img src="screenshot/1.png" width="40%">

<img src="screenshot/1.1.png" width="40%">

<img src="screenshot/2.png" width="40%">

<img src="screenshot/3.png" width="40%">

<img src="screenshot/4.png" width="40%">

<img src="screenshot/5.png" width="40%">