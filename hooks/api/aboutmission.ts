import { AboutMissionApi } from "@/services/aboutmission";
import { useQuery } from "@tanstack/react-query";

export const useAboutMission = (params:{
    lang:string
})=>{
    return useQuery({
        queryKey:['about_mission'],
        queryFn:()=>AboutMissionApi.getAboutMission(params)
    })
}