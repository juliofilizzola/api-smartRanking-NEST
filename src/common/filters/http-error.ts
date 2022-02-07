import { Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from "@nestjs/common";

@Catch() // anotação de tratamento de error MASSA DE MAIS!!
export class httpError {
  
  private readonly logger = new Logger(httpError.name);

  catch(execption: unknown, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const statusCode = execption instanceof HttpException
    ? execption.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = execption instanceof HttpException ? execption.getStatus() : execption;

    this.logger.error(`Http Status: ${statusCode} Error Message: ${JSON.stringify(message)}`);

    response.status(statusCode).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      error: message
    });

  }
}