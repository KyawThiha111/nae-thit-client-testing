import { apiClient } from "@/libs/api-client";
export const TeamMemberApi = {
    getTeamMember:(params:{lang:string})=>
      apiClient.get<TypeOfTeamMember>('/api/pages/teammember',params)
}