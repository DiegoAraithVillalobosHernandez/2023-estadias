import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import { PeopleRepository } from "../uses-cases/ports/people.repository";
import api from '@/config/http-client.gatway';
import { Person } from "../entities/Person";

export class PeopleStorageGateway implements PeopleRepository{
    async getAllPeople(page: number): Promise<ResponseApi<AllPeopleDto>> {
        const resp = await api.doGet(`/users?page=${page}`)
        return {
            status: resp.status,
            entity: resp.data,
            result: true
        } as ResponseApi<AllPeopleDto>;
    }

    async savePerson(person: Person): Promise<ResponseApi<Person>> {
        const resp = await api.doPost(`/users`, person)
        return {
            status: resp.status,
            entity: resp.data,
            result: true
        } as ResponseApi<Person>;
    }

}