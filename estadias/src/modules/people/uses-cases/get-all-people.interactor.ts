import { PeopleRepository } from './ports/people.repository';
import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import { UseCase } from "@/kernel/contracts";

export class GetAllPeopleInteractor implements UseCase<number, ResponseApi<AllPeopleDto>>{

    constructor(private readonly peopleRepository : PeopleRepository){}

    execute(payload?: number | undefined): Promise<ResponseApi<AllPeopleDto>> {
        if(!payload){
            payload = 1;
        }

        return this.peopleRepository.getAllPeople(payload);
    }

}