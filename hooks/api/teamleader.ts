import { TeamLeaderApi } from "@/services/teamleader";
import { useQuery } from "@tanstack/react-query";

export const useTeamLeader = (params:{
    lang:string
})=>{
    return useQuery({
        queryKey:['teamleader'],
        queryFn:()=>TeamLeaderApi.getTeamLeader(params)
    })
}