export function storeLocalData(userName: String): any {
  try {
        const getDataString = localStorage.getItem("user-details");
        const getData = getDataString ? JSON.parse(getDataString) : {};
        // checkoing for userName whether it is already exist or not
        if (getData[`${userName}`]) {
        // setting current-user
        getData["currentUser"] = userName;
        const dataString = JSON.stringify(getData);
        localStorage.setItem("user-details", dataString);
        } else {
        // create a new data for new this userName
        getData["currentUser"] = userName
        getData[`${userName}`] = {
            score:0
        }
        const newDetailString = JSON.stringify(getData);
        localStorage.setItem("user-details", newDetailString);
        }
        return getUserData();
    } catch (error) {
        console.log("Error in setting user data into localStorage", error);
    }
}

export function getUserData() {
  try {
        const getUserString = localStorage.getItem("user-details");
        const getUsers = getUserString ? JSON.parse(getUserString) : {};
        const currentUser = getUsers["currentUser"];
        const userDetail = Object.keys(getUsers)
        .filter((keyName) => keyName !== "currentUser")
        .map((usrName) => ({
            name : usrName,
            score : (getUsers[usrName]).score as number, //type assertion here
        }));

        // Returning data as an object
        return {
        currentUser,
        userDetail,
        };
    } catch (error) {
        console.log("Error in getting user Data", error);
    }
}
