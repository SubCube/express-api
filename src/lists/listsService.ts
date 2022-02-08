export class ListService {
  static async test(): Promise<string> {
    const list = new Promise((resolve, _reject) => {
      setTimeout(() => resolve('готово!'), 1000)
    })

    return (await list) as string
  }
}
