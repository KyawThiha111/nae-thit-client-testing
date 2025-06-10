type TypeOfEachMember = {
    id:string,
    name:string,
    position:string,
    photo:string
}
type TypeOfTeamMember = {
    success:true,
    members:TypeOfEachMember[]
}