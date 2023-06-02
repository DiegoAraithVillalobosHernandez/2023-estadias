import { PeopleRepository } from './ports/people.repository';
import { ResponseApi } from "@/kernel/types";
import { UseCase } from "@/kernel/contracts";
import { Person } from '../entities/Person';

export class SavePeopleInteractor implements UseCase<Person, ResponseApi<Person>>{

    constructor(private readonly peopleRepository : PeopleRepository){}

    execute(payload: Person): Promise<ResponseApi<Person>> {
        return this.peopleRepository.savePerson(payload);
    }

}