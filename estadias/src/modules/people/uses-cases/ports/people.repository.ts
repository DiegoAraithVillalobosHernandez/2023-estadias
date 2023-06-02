import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../../entities/AllPeopleDto";
import { Person } from "../../entities/Person";

export interface PeopleRepository{
    getAllPeople(page:number):Promise<ResponseApi<AllPeopleDto>>;
    savePerson(person:Person):Promise<ResponseApi<Person>>;
}