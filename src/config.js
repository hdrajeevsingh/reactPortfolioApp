 var userConfig = {
    'ID':sessionStorage.getItem("ID") || '',
    'fIRSTNAME':'',
    'LASTNAME':'',
    'LOGGED_IN':sessionStorage.getItem("LOGGED_IN") || ''
    
};

export default userConfig;