export const useGetUserInfo = () => {
    const {name , profilePhoto , userID , isAtuh} =JSON.parse(localStorage.getItem("auth"));

    return { name , profilePhoto , userID , isAtuh};

};

