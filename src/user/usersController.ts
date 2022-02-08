import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Tags, Response } from 'tsoa'
import { User } from './user'

import { UsersService, UserCreationParams } from './usersService'

interface ValidateErrorJSON {
  message: 'Validation failed'
  details: { [name: string]: unknown }
}

@Route('users')
@Tags('/myTag')
export class UsersController extends Controller {
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @Get('{userId}')
  public async getUser(@Path() userId: number, @Query() name?: string): Promise<User> {
    return new UsersService().get(userId, name)
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(@Body() requestBody: UserCreationParams): Promise<void> {
    this.setStatus(201) // set return status 201
    new UsersService().create(requestBody)
    return
  }
}
