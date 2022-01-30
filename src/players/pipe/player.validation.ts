import { PipeTransform, ArgumentMetadata, BadGatewayException } from '@nestjs/common';

export class playerValidation implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadGatewayException(`O valor do parametro ${metadata.data} deve ser informado`);
    }

    return value;
  }
}