import { Controller, Route, Tags, Post, Get, Put, Delete, Body, Response, Query } from 'tsoa'

interface ValidateErrorJSON {
  message: 'Validation failed'
  details: { [name: string]: unknown }
}

@Route('crud')
@Tags('/crud')
export class CrudController extends Controller {
  @Post('create')
  @Response<ValidateErrorJSON>(500, 'Server Failed')
  async create(@Body() item: { name: string; count?: number }) {
    await new Promise((_res, _rej) => {
      setTimeout(() => {
        console.log(item)
      }, 800)
    })
  }

  @Get('read')
  @Response<ValidateErrorJSON>(500, 'Server Failed')
  async read() {
    return await new Promise((_res, _rej) => {
      setTimeout(() => {
        console.log('read')
      }, 800)
    })
  }

  @Put('update')
  @Response<ValidateErrorJSON>(500, 'Server Failed')
  async update(@Query() id: string) {
    return await new Promise((_res, _rej) => {
      setTimeout(() => {
        console.log(`updated ${id}`)
      }, 800)
    })
  }

  @Delete('update')
  @Response<ValidateErrorJSON>(500, 'Server Failed')
  async delete(@Query() id: string) {
    return await new Promise((_res, _rej) => {
      setTimeout(() => {
        console.log(`deleted ${id}`)
      }, 800)
    })
  }
}
