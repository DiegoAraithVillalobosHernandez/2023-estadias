import { PeopleDto } from './../entities/PeopleDto';
import { ResponseApi } from '@/kernel/types';
import { GetAllPeopleInteractor } from '../uses-cases/get-all-people.interactor';
import { PeopleRepository } from './../uses-cases/ports/people.repository';
import { PeopleStorageGateway } from "./people-storage.gateway";
import { AllPeopleDto } from '../entities/AllPeopleDto';
import { SavePeopleInteractor } from '../uses-cases/save-people-interactor';
import { Person } from '../entities/Person';

export class PeopleController{

    getAllPeople(page: number){

        try{
            const repository : PeopleRepository = new PeopleStorageGateway();
            const interactor : GetAllPeopleInteractor = new GetAllPeopleInteractor(repository);
            return interactor.execute(page);
        }catch(error){
            return{
                result:false
            } as ResponseApi<AllPeopleDto>
        }
    }

    savePeople(person: Person){

        try{
            const repository : PeopleRepository = new PeopleStorageGateway();
            const interactor : SavePeopleInteractor = new SavePeopleInteractor(repository);
            return interactor.execute(person);
        }catch(error){
            return{
                result:false
            } as ResponseApi<Person>
        }
    }
}