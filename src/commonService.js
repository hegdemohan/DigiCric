let appContext;

const CommonService = {
    getAppContext: function () {
        return appContext;
    },
    setAppContext: function (context) {
        appContext = context;
    }
}

export default CommonService;