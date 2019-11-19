import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface ITags {
    path: string;
    name: string;
    title: string;
}

@Module({name:'home',namespaced:true,dynamic: true,store})
export default class Home extends VuexModule{
    
    isCollapse: boolean = false
    tagList: string[] = []

    @Mutation
    SET_ISCOLLAPSE(val: boolean){
        this.isCollapse = val
    }

    @Mutation
    SET_TAGLIST(tagList: string[]){
        this.tagList.length = 0
        this.tagList = tagList
    }

    @Action
    collapse(){
        this.SET_ISCOLLAPSE(!this.isCollapse)
    }

    @Action
    tags(val: ITags[]){
        let arr:string[] = [];
        for (let i = 0, len = val.length; i < len; i++) {
            val[i].name && arr.push(val[i].name);
        }
        this.SET_TAGLIST(arr)
    }
}


export const HomeModule = getModule(Home)