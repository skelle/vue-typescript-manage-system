import request from "@/utils/request";

export const fetchData = (params: any) => {
    return request({
        url: "./table.json",
        method: "get",
        params
    });
};
