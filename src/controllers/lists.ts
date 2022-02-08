import { Controller, Get, Route, Tags, Response } from 'tsoa'
import { ListService } from '../services/listsService'

interface ValidateErrorJSON {
  message: 'Validation failed'
  details: { [name: string]: unknown }
}

@Route('lists')
@Tags('/lists')
export class ListController extends Controller {
  @Response<ValidateErrorJSON>(500, 'Server Failed')
  @Get('')
  public async getList(): Promise<string> {
    return await ListService.test()
  }
}
