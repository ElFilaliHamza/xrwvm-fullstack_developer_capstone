# coding-project-template

# Run the django app :

first install the virtual env and activate it :

```shell
python3 -m pip install virtualenv
python3 -m virtualenv djangoenv
source djangoenv/bin/activate
```

than install the demendencies

```shell
pip install -r requirements.txt
```

Now run the migrations :

```shell
python3 manage.py migrate --run-syncdb
python3 manage.py makemigrations
```

## Configure and run the sentiment analysis app

Run the app using docker commands than Run the docker image :

```shell
docker build . -t sentimerntanalysis
docker run -d -p 5000:5000 sentimerntanalysis
```

Configure the django app environement variables (/server/djangoapp/.env)
fill those variables :

```sh
backend_url =https://hamzafunrand-8000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai

sentiment_analyzer_url=https://sentianalyzer.1njfxxoakpee.us-south.codeengine.appdomain.cloud/

```

(don't forger to install the requirement.txt)

Now run the app using :

```shell
python3 manage.py runserver
```

(create a root superuser if needed with the pwd root)

### Configure this sentianalyse:


Start the Code Engine

    Start code engine by creating a project.

    The code engine environment takes a while to prepare. You will see the progress status being indicated in the set up panel.

    Once the code engine set up is complete, you can see that it is active. Click on Code Engine CLI to begin the pre-configured CLI in the terminal below.

    You will observe that the pre-configured CLI statrup and the home directory is set to the current directory. As a part of the pre-configuration, the project has been set up and Kubeconfig is set up. The details that are shown on the terminal.


Deploy sentiment analysis on Code Engine as a microservice

    In the code engine CLI, change to server/djangoapp/microservices directory.

    1

    cd xrwvm-fullstack_developer_capstone/server/djangoapp/microservices

You have been provided with sentiment_analyzer.py which uses NLTK for sentiment analysis. You are also provided with a Dockerfile which you will use to deploy this service in Code Engine and consume it as a microservice. Take a look at these files.

    Run the following command to docker build the sentiment analyzer app

        Please note the code engine instance is transient and is attached to your lab space username.

    1

    docker build . -t us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer

    Push the docker image by running the following command.

    1

    docker push us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer

    Deploy the senti_analyzer application on code engine.

    1

    ibmcloud ce application create --name sentianalyzer --image us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer --registry-secret icr-secret --port 5000

    Connect to the URL that is generated to access the microservices and check if the deployment is successful.

    If the application deployment verification was successful, attach /analyze/Fantastic services to the URL in the browser to see if it returns positive. Take a screenshot of the sentiment along with the URL as shown below and save it as sentiment_analyzer.png or sentiment_analyzer.jpg.

    Open djangoapp/.env and replace your code engine deployment url with the deployment URL you obtained above.

    It is essential to include the / at the end of the URL. Please ensure that it is copied.

    1

    sentiment_analyzer_url=your code engine deployment url

## lunch the nodeapp image

Let's start by building the image 'nodeapp'

```shell
docker build . -t nodeapp | docker-compose up -d
```

## Now let's start our frontend :

```shell
npm install
npm run build
```

For those apps you need to launch an app using the Skills Network Toolbox if you are using the IBM skills net .

Well done!
