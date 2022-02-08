import { Controller, Get, Route, Tags, Response } from 'tsoa'
import { ListService } from './listsService'

interface ValidateErrorJSON {
  message: 'Validation failed'
  details: { [name: string]: unknown }
}

@Route('Lists')
@Tags('/lists')
export class ListController extends Controller {
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @Get('')
  public async getList(): Promise<string> {
    return await ListService.test()
  }
}
