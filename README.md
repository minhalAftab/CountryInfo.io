# Hi There 🖐️


## Project Description

This project entails the creation of a web application that facilitates a user's input of a country name. The application will then make an API call to RESTCountries to retrieve and display pertinent information about the specified country.

### Project Deliverable:

Deployed Link FrontEnd : https://country-info-io-frontend.vercel.app/


## How To Setup:

**1. Clone Repository:**
- Clone the folder onto your desktop or preferred directory.

**2. Access Terminal or PowerShell:**
- Open your terminal and navigate to the cloned folder.

**3. Change Directory to Frontend:**
- Execute the command in the terminal to navigate to the frontend directory.
  
        cd ./frontend/     

**4. Install Dependencies:**
- Run Command to install necessary dependencies.

        npm install --legacy-peer-deps
   
## How To Start:
1. **Launch the Application:**
    - Open a terminal within the 'Frontend' folder.

2. **Initiate Application:**
   - Execute `npm start` command to start the application.

         
## How to Use the Application:

1. **Search Functionality:**
    - Input the exact name of the desired country in the search bar.

2. **Error Handling:**
    - Ensure the entered name matches an existing country; errors may occur if the country name is not found.


## How to setup Cypress Frontend Testing:

**1. Access Terminal or PowerShell:**
- Open your terminal and navigate to the cloned folder.

**2. Change Directory to Testing Folder:**
- Execute the command in the terminal to navigate to the testing directory.
  
        cd ./testing/

**3. Install Cypress:**
- Run Command to install necessary dependencies.

        npm install --dev

## How to Run Cypress Frontend Testing 

**1. Open Cypress Application:**
- Run Command to open the application

        npx cypress open
  

**2. Select E2E Testing**
- A window will open with two options to select from. Choose the E2E testing.

**2. Select Current Browser**
- A window will open with multiple browser options, select your preferred browser and click on the start E2E testing on "selected" browser button.

**4. Select App.cy.js File:**
- Once you select the `app.cy.js` file you will see the test being run within the Cypress interface. This file contains the tests to be executed.


## How to setup Jest Backend Testing:

**1. Access Terminal or PowerShell:**
- Open your terminal and navigate to the cloned folder.

**2. Change Directory to Testing Folder:**
- Execute the command in the terminal to navigate to the testing directory.
  
        cd ./testing/
  
**3. Install Jest:**
- Run Command to install necessary dependencies. If cypress testing is done then install command is not neccessary.

        npm install -D 

## How to Run Jest Backend Testing 

**1. Run Test:**
- Run Command to see the test result.

      node ./node_modules/jest/bin/jest.js --runInBand

The handler.t.js file inside \_\_test\_\_ includes the tests that are being run.

## Process Overview:

1. **Wireframe Development:**
    - Initial creation of a basic mockup to outline the user interface's structure and functionalities on Figma.

2. **High-Fidelity Design:**
    - Enhanced and detailed design development based on the Figma wireframe, focusing on user experience and visual aesthetics.

3. **Implementation using React:**
    - Translating the designed interface into a functional web application using React framework.

4. **Integration of Geographic Information:**
    - Utilization of latitude and longitude data obtained from the API to incorporate a geographical map feature.

4. **Integration of Cypress and Jest Testing:**
    - Integrated frontend and backend testing.

      

## Screen Designs:

1. **Minimalist Landing Page:**
    - Emphasizes simplicity to highlight the primary call-to-action, which is the country search feature.
   ![alt text](https://github.com/minhalAftab/CountryInfo.io/blob/master/frontend/src/assets/landingPage.png)

2. **Structured Information Display:**
    - Presents relevant country details in a clear and easily readable format, prioritizing important information.
   ![alt text](https://github.com/minhalAftab/CountryInfo.io/blob/master/frontend/src/assets/successfulSearch.png)

3. **Error Handling for Incorrect Inputs:**
    - Provides user-friendly error messages in case of incorrect country name entries, ensuring a seamless user experience.
   ![alt text](https://github.com/minhalAftab/CountryInfo.io/blob/master/frontend/src/assets/unsuccessfulSearch.png)
   ![alt text](https://github.com/minhalAftab/CountryInfo.io/blob/master/frontend/src/assets/successfulSearchMapUnloaded.png)

