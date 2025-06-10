import { apiClient } from "@/libs/api-client";
export const TeamLeaderApi = {
    getTeamLeader:(params:{lang:string})=>
      apiClient.get<TypeOfTeamMember>('/api/pages/leaders',params)
}