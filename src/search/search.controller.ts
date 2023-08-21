import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('tickets')
  async searchTickets(@Query('query') query: string) {
    const searchResults = await this.searchService.searchTickets(query);
    return searchResults;
  }
}
