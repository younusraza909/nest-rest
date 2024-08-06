import { Test, TestingModule } from '@nestjs/testing';


describe('EmployeesController', () => {
  let controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({

    }).compile();

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
