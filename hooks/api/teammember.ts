import { TeamMemberApi } from "@/services/teammember";
import { useQuery } from "@tanstack/react-query";

export const useTeammember = (params:{
    lang:string
})=>{
    return useQuery({
        queryKey:['teammember'],
        queryFn:()=>TeamMemberApi.getTeamMember(params)
    })
}